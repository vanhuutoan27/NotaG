-- Tạo cơ sở dữ liệu
CREATE DATABASE UmiluxDB;
GO

-- Sử dụng cơ sở dữ liệu
USE UmiluxDB;
GO

-- Bảng người dùng
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100) NOT NULL UNIQUE,
    PhoneNumber VARCHAR(20),
    RegistrationDate DATE NOT NULL
);
GO

-- Bảng vai trò người dùng
CREATE TABLE Roles (
    RoleID INT PRIMARY KEY IDENTITY,
    RoleName VARCHAR(50) NOT NULL
);
GO

-- Bảng người dùng và vai trò
CREATE TABLE UserRoles (
    UserID INT,
    RoleID INT,
    PRIMARY KEY (UserID, RoleID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);
GO

-- Bảng bài viết
CREATE TABLE Posts (
    PostID INT PRIMARY KEY IDENTITY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    AuthorID INT,
    PublishDate DATE NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);
GO

-- Bảng bình luận
CREATE TABLE Comments (
    CommentID INT PRIMARY KEY IDENTITY,
    PostID INT,
    AuthorID INT,
    CommentText TEXT NOT NULL,
    CommentDate DATE NOT NULL,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);
GO

-- Bảng danh mục sản phẩm
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY,
    CategoryName VARCHAR(255) NOT NULL
);
GO

-- Bảng sản phẩm
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY,
    ProductName VARCHAR(255) NOT NULL,
    CategoryID INT,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    Description TEXT,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
GO

-- Bảng yêu thích
CREATE TABLE Wishlists (
    WishlistID INT PRIMARY KEY IDENTITY,
    UserID INT,
    ProductID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Bảng giỏ hàng
CREATE TABLE Carts (
    CartID INT PRIMARY KEY IDENTITY,
    UserID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Bảng đơn hàng
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    CustomerID INT,
    OrderDate DATE NOT NULL,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    OrderStatus VARCHAR(20) NOT NULL, -- Đã sửa ENUM thành VARCHAR
    FOREIGN KEY (CustomerID) REFERENCES Users(UserID) -- Đã sửa từ Customers thành Users
);
GO

-- Bảng chi tiết đơn hàng
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY IDENTITY,
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Bảng tin tức
CREATE TABLE News (
    NewsID INT PRIMARY KEY IDENTITY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    PublishDate DATE NOT NULL
);
GO

-- Bảng liên hệ
CREATE TABLE Contacts (
    ContactID INT PRIMARY KEY IDENTITY,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(20),
    Message TEXT NOT NULL,
    ContactDate DATETIME NOT NULL
);
GO
