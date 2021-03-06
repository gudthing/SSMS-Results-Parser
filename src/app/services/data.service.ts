export class DataService {

    ssmsInput = {};

    dummyFromData = `
    Id,Name
    1,Chauncy
    2,Ploom

    (2 row(s) affected)

    Table 'Schools'. Scan count 10, logical reads 4, physical reads 10, read-ahead reads 10, lob logical reads 7, lob physical reads 3, lob read-ahead reads 2.

     SQL Server Execution Times:
       CPU time = 0 ms,  elapsed time = 165 ms.
    Id,FirstName,LastName,Gender,SchoolID
    1,John,Knight,0,1
    2,Amy,Smith,1,1
    3,Becca,Johnson,1,2
    4,Rob,Tyler,0,2
    5,Mark,Pop,0,2

    (5 row(s) affected)

    Table 'Students'. Scan count 1, logical reads 2, physical reads 2, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.

     SQL Server Execution Times:
       CPU time = 0 ms,  elapsed time = 0 ms.
    Id,Name,Id,FirstName,LastName,Gender,SchoolID
    1,Chauncy,1,John,Knight,0,1
    1,Chauncy,2,Amy,Smith,1,1
    2,Ploom,3,Becca,Jonson,1,2
    2,Ploom,4,Rob,Tyler,0,2
    2,Ploom,5,Mark,Pop,0,2

    (5 row(s) affected)

    Table 'Schools'. Scan count 10, logical reads 4, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
    Table 'Students'. Scan count 1, logical reads 2, physical reads 4, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.

     SQL Server Execution Times:
       CPU time = 10 ms,  elapsed time = 20 ms.
    `;

    dummyToData = `
    Id,Name
    1,Chauncy
    2,Ploom

    (2 row(s) affected)

    Table 'Schools'. Scan count 1, logical reads 2, physical reads 10, read-ahead reads 10, lob logical reads 7, lob physical reads 3, lob read-ahead reads 2.

     SQL Server Execution Times:
       CPU time = 0 ms,  elapsed time = 165 ms.
    Id,FirstName,LastName,Gender,SchoolID
    1,John,Knight,0,1
    2,Amy,Smith,1,1
    3,Becca,Johnson,1,2
    4,Rob,Tyler,0,2
    5,Mark,Pop,0,2

    (5 row(s) affected)

    Table 'Students'. Scan count 1, logical reads 2, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.

     SQL Server Execution Times:
       CPU time = 0 ms,  elapsed time = 0 ms.
    Id,Name,Id,FirstName,LastName,Gender,SchoolID
    1,Chauncy,1,John,Knight,0,1
    1,Chauncy,2,Amy,Smith,1,1
    2,Ploom,3,Becca,Jonson,1,2
    2,Ploom,4,Rob,Tyler,0,2
    2,Ploom,5,Mark,Pop,0,2

    (5 row(s) affected)

    Table 'Schools'. Scan count 0, logical reads 10, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
    Table 'Students'. Scan count 1, logical reads 2, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.

     SQL Server Execution Times:
       CPU time = 5 ms,  elapsed time = 10 ms.
    `;

    resetInput() {
        this.ssmsInput = {};
    }
}
