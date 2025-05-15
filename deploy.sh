#!/bin/bash
directory=dist
branch=gh-pages
build_command() {
  npm run build
}

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch...\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mCreating CNAME configs...\033[0m"
cp ./CNAME $directory/

echo -e "\033[0;32mCreating 404.html for SPA routing...\033[0m"
cat > $directory/404.html << EOL
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    sessionStorage.setItem('redirect', window.location.pathname);
    window.location.href = '/';
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
EOL

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git push origin $branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory