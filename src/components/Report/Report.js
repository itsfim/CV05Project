import React from 'react';


class Report extends React.Component {
    render() {
        return(
            <div className='pageIntro'>
                <h1 className='h1'>Report Page</h1>
                <main className='main'>
                    <php
                	$sql = "SELECT * FROM GameScore WHERE userID = '1' ORDER BY Dateplayed";
                	$result = $db.query($sql);

                	if ($result->num_rows > 0) {
  						echo "<table><tr><th>ID</th><th>Name</th></tr>";
    					while($row = $result->fetch_assoc()) {
   								 echo "<tr><td>".$row["UserID"]."</td><td>".$row["Dateplayed"]." ".$row["TimeScore"]."</td></tr>";
 						 }
  						echo "</table>";
                	} else {
  						echo "0 results";
						}
						?>
                </main>
            </div>
        )
    }
}
export default Report;
