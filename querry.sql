// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız
// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız
// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız

SELECT
    p.FirstName,
    p.LastName,
    p.Title,
    p.TitleOfCourtesy,
    p.BirthDate,
    p.HireDate,
    p.Address,
    p.City,
    p.Region,
    p.PostalCode,
    p.Country,
    p.HomePhone,
    p.Extension,
    p.Photo,
    p.Notes,
    p.ReportsTo,
    p.PhotoPath,
    SUM(od.UnitPrice * od.Quantity) AS TotalSales
FROM
    Employees AS p
    INNER JOIN Orders AS o ON p.EmployeeID = o.EmployeeID
    INNER JOIN [Order Details] AS od ON o.OrderID = od.OrderID
WHERE
    YEAR(o.OrderDate) = 1996
    AND MONTH(o.OrderDate) = 7
    AND (od.UnitPrice * od.Quantity) > 5000
GROUP BY
    p.EmployeeID,
    p.FirstName,
    p.LastName,
    p.Title,
    p.TitleOfCourtesy,
    p.BirthDate,
    p.HireDate,
    p.Address,
    p.City,
    p.Region,
    p.PostalCode,
    p.Country,
    p.HomePhone,
    p.Extension,
    p.Photo,
    p.Notes,
    p.ReportsTo,
    p.PhotoPath
ORDER BY
    TotalSales DESC

-- Path: querry.sql
// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız
// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız
// 1996 yılı temmuz ayında, 5000 DOLAR üzerinde satış gerçekleştiren Personel bilgilerini getiren sorguyu yazınız