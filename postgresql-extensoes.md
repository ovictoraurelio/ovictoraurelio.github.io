# 🧩 Instalação das Extensões do Supabase no PostgreSQL 17 (OpenShift / RHEL 9)

Este guia descreve como instalar e habilitar todas as **extensões oficiais do Supabase** em um ambiente **PostgreSQL 17**, compatível com **OpenShift** (SecurityContext `restricted` / `non-root`).  
O objetivo é equipar o banco utilizado pelo stack completo do Supabase (Auth, Realtime, Storage, Functions, Studio, Kong, etc.).

---

## 🧱 1. Pré-requisitos

Antes de começar, certifique-se de que seu container ou VM possui:

- PostgreSQL 17 já instalado (`postgresql17-server`, `postgresql17-contrib`);
- Acesso à internet para clonar repositórios GitHub;
- Permissão de compilação (você pode compilar fora do OpenShift e apenas copiar os binários).

Instale os pacotes básicos de compilação:

```bash
sudo dnf install -y \
  git \
  make \
  cmake \
  gcc \
  g++ \
  openssl-devel \
  libcurl-devel \
  libpq-devel \
  libsodium-devel \
  postgresql17-server-devel
```
🧩 2. Extensões que serão instaladas

| Extensão        | Repositório           | Função                                         |
|-----------------|-----------------------|------------------------------------------------|
| pgsodium        | supabase/pgsodium     | Criptografia e gerenciamento de chaves         |
| pg_net          | supabase/pg_net       | Cliente HTTP interno (para webhooks e funções) |
| pg_graphql      | supabase/pg_graphql   | API GraphQL nativa sobre o banco               |
| pgjwt           | michelp/pgjwt         | Criação e validação de tokens JWT              |
| supabase_auth   | supabase/auth         | Suporte ao serviço Supabase Auth               |
| supabase_vault  | supabase/vault        | Armazenamento seguro de segredos               |

⸻

⚙️ 3. Instalação de cada extensão

🧱 3.1. pgsodium
```
git clone https://github.com/supabase/pgsodium.git
cd pgsodium
make
sudo make install
```
Verifique:
```
ls /usr/pgsql-17/share/extension/pgsodium*
```
Ative no banco:
```
CREATE EXTENSION pgsodium;
```

⸻

🌐 3.2. pg_net
```
git clone https://github.com/supabase/pg_net.git
cd pg_net
make
sudo make install
```
Ative:
```
CREATE EXTENSION pg_net;
```

⸻

🧭 3.3. pg_graphql
```
git clone https://github.com/supabase/pg_graphql.git
cd pg_graphql
make
sudo make install
```
Ative:
```
CREATE EXTENSION pg_graphql;
```

⸻

🔐 3.4. pgjwt

Essa extensão é puramente SQL — não requer compilação.
```
git clone https://github.com/michelp/pgjwt.git
sudo cp pgjwt/pgjwt.control /usr/pgsql-17/share/extension/
sudo cp pgjwt/pgjwt--*.sql /usr/pgsql-17/share/extension/
```
Ative:
```
CREATE EXTENSION pgjwt;
```

⸻

👥 3.5. supabase_auth (opcional se o serviço Auth estiver ativo)

Essa extensão é parte do container supabase/postgres.
Se você estiver rodando Auth no cluster, ela será criada automaticamente.
Mas pode ser compilada manualmente:
```
git clone https://github.com/supabase/auth.git
cd auth/postgres
make
sudo make install
```
Ative:
```
CREATE EXTENSION supabase_auth;
```

⸻

🔒 3.6. supabase_vault (opcional)

Mesma lógica do Auth.
Se o serviço Vault estiver ativo, o Supabase cria a extensão automaticamente.
Compilação manual:
```
git clone https://github.com/supabase/vault.git
cd vault/postgres
make
sudo make install
```
Ative:
```
CREATE EXTENSION supabase_vault;
```

⸻

🧰 4. Verificação

Entre no Postgres:

```
sudo -u postgres psql
```

E rode:

```
\dx
```

Devemos ter uma lista parecida com:

| Extensão         | Versão | Esquema | Descrição                            |
|------------------|---------|----------|--------------------------------------|
| pg_graphql       | 1.6.0   | public   | GraphQL support for PostgreSQL       |
| pg_net           | 0.9.0   | public   | HTTP client for PostgreSQL           |
| pgsodium         | 3.1.2   | public   | Cryptographic functions              |
| pgjwt            | 0.1.0   | public   | JSON Web Token functions             |
| supabase_auth    | 0.1.0   | public   | Supabase Auth integration            |
| supabase_vault   | 0.1.0   | public   | Supabase Vault secure secrets        |
