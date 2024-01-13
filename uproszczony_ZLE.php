ZLE-NIE TAK!!!!!!!!!
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="description" content="Nazwisko Klasa 1P1">
	<title>Strona główna</title>
</head>
<body>
    <?php
        ini_set('display_errors', '0'); # wyłączenie komunikatów systemowych
        
        $id_conn = mysqli_connect('localhost', 'root', '', 'baza_testowa');
        $zapytanie = "SELECT prac.id,          	
                             prac.last_name,   	
                             prac.first_name, 	
     	                     prac.start_date,
                             prac.salary,
                             prac.title,
                             prac.userid,
                             man.last_name  AS 'Szef',
                             prac.comments
                      FROM emp AS prac, emp AS man 
                      WHERE man.id = prac.manager_id;
                      ";   
        $wynik = mysqli_query($id_conn, $zapytanie); 
    ?>
    <br><br>
    <table cellspacing="0" cellpadding="0" border="1" style="width: 90%;" align="center">
    <tbody align="Center">
    
    <?php
        while ($row = mysqli_fetch_array($wynik))  #row-zmienna
        { 
    ?>
            <tr height = "20">
                <?php for($ii=0;$ii<8;$ii+=1) { ?>
                    <td> <?php printf("%s", $row[$ii]);    	    ?> </td>
                <?php 
                    } 
                ?>
	    </tr>
    <?php       
        }
    ?>         
    </tbody>
    </table>  
</body>
</html>