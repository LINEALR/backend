Write-Host "🚀 Reiniciando Prisma Client y NestJS..."

# 1. Borrar node_modules y cliente Prisma viejo
Write-Host "Eliminando node_modules y .prisma..."
Remove-Item -Recurse -Force node_modules
Remove-Item -Recurse -Force node_modules/.prisma

# 2. Instalar dependencias
Write-Host "Instalando dependencias..."
npm install

# 3. Regenerar Prisma Client
Write-Host "Generando Prisma Client..."
npx prisma generate --schema=src/infraestructure/prisma/postgresql/schema.postgresql.prisma

# 4. Reiniciar NestJS
Write-Host "Reiniciando NestJS..."
npm run start:dev
