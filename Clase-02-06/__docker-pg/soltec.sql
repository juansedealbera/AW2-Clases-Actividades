-- 1. Crear la base de datos Soltec
CREATE DATABASE Soltec;
GO

-- 2. Usar la base de datos creada
USE Soltec;
GO

-- 3. Crear tabla Marca (Tablas padre primero)
CREATE TABLE Marca (
    idMarca INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- 4. Crear tabla Categoria
CREATE TABLE Categoria (
    idCategoria INT IDENTITY(1,1) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- 5. Crear tabla Producto (Tabla hija con claves foráneas)
CREATE TABLE Producto (
    idProducto INT IDENTITY(1,1) PRIMARY KEY,
    idMarca INT NOT NULL,
    idCategoria INT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(500),
    stock INT NOT NULL DEFAULT 0,
    precio DECIMAL(18, 2) NOT NULL,
    foto VARCHAR(255),

    -- Restricciones de Integridad Referencial
    CONSTRAINT FK_Producto_Marca FOREIGN KEY (idMarca) 
        REFERENCES Marca(idMarca),
        
    CONSTRAINT FK_Producto_Categoria FOREIGN KEY (idCategoria) 
        REFERENCES Categoria(idCategoria)
);
GO

USE Soltec;
GO

-- 1. Insertar dos registros en la tabla Marca
INSERT INTO Marca (nombre) 
VALUES 
    ('Samsung'),
    ('Lenovo');

-- 2. Insertar dos registros en la tabla Categoria
INSERT INTO Categoria (nombre) 
VALUES 
    ('Smartphones'),
    ('Notebooks');

-- 3. Insertar dos registros en la tabla Producto
-- Nota: Asumimos que los IDs generados arriba son 1 y 2.
INSERT INTO Producto (idMarca, idCategoria, nombre, descripcion, stock, precio, foto) 
VALUES 
    (1, 1, 'Samsung Galaxy S23', 'Teléfono móvil de alta gama, 256GB de almacenamiento', 15, 850000.00, '/imagenes/s23.jpg'),
    (2, 2, 'Lenovo ThinkPad E14', 'Notebook empresarial, procesador Intel i7, 16GB RAM', 8, 1250000.00, '/imagenes/thinkpad-e14.jpg');
GO

SELECT * FROM Producto

--fabrizio