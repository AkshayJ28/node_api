const oracledb = require("oracledb");

async function testConnection() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: "SIMSDEV",
            password: "SIMSDEV",
            connectString: "192.168.100.80/rajsims"
        });

        console.log("Successfully connected to OracleDB");
        
        const result = await connection.execute(
            "select Id, Name from um_action where rownum<=5"
        );

        console.log("Query Results:", result.rows);
    } catch (err) {
        console.error('Error connecting to OracleDB:', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

testConnection();
