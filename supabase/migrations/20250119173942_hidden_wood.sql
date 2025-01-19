/*
  # Configuración inicial de usuarios y autenticación

  1. Nueva Tabla
    - `user_profiles`
      - `id` (uuid, primary key, referencia a auth.users)
      - `nombre` (text, nombre del usuario)
      - `apellidos` (text, apellidos del usuario)
      - `rfc` (text, opcional, RFC del usuario)
      - `usuario` (text, nombre de usuario único)
      - `created_at` (timestamp, fecha de creación)
      - `updated_at` (timestamp, fecha de actualización)

  2. Seguridad
    - Habilitar RLS en la tabla user_profiles
    - Políticas para:
      - Insertar: Solo usuarios autenticados pueden crear su perfil
      - Leer: Usuarios pueden leer solo su propio perfil
      - Actualizar: Usuarios pueden actualizar solo su propio perfil
*/

-- Crear la tabla de perfiles de usuario
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  nombre text NOT NULL,
  apellidos text NOT NULL,
  rfc text,
  usuario text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad
CREATE POLICY "Users can insert their own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();