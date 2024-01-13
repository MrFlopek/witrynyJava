<!doctype html>
<html>
    <head>
	<meta charset="utf-8">
	<meta name="description" content="Opis zawartości strony">
	<title>Strona główna</title>
    </head>
    <body>
        <h2 align="center">Baza testowa</h2>
        <?php
            ini_set('display_errors', '0'); # wyłączenie komunikatów systemowych
            mysqli_report(MYSQLI_REPORT_ERROR);

            $baza   = 'baza_testowa';
            $host   = 'localhost';
            $user   = 'root';
	    $passwd = '';

            $id_conn = mysqli_connect($host, $user, $passwd, $baza);

            if (mysqli_connect_errno()) 
            {
                echo "Błąd połączenia z MySQL: " . $baza . " (" . mysqli_connect_error() . ')';
                exit; 
            }            

            $zapytanie = "SELECT emp.id,
                                 emp.last_name,
                                 emp.first_name,
  			         emp.userId,
 			         emp.comments,  
 			         emp.start_date
                          FROM emp;";

            $wynik = mysqli_query($id_conn, $zapytanie); 
            if (!$wynik) 
            {
                echo 'Nie mogę wykonać zapytania: ' . mysqli_error($id_conn);
                mysqli_close($id_conn);  # zamyka połączenie z bazą
	        exit;
            }
        ?>   
        
        <br>
 
        <table cellspacing="0" cellpadding="0" border="1" style="width: 90%;" align="center">
        <tbody align="Center">
        <tr bgcolor="#A000FF" >
          <td>ID</td>
          <td>NAZWISKO</td>
          <td>IMIĘ</td>
          <td>USER ID</td>
          <td>UWAGI</td>
          <td>DATA REJESTRACJI</td>
        </tr>

        <?php
            while ($row = mysqli_fetch_array($wynik))     #row-zmienna 
            { 
        ?> 
            <tr height = "20">
  		 <td> <?php printf("%d", $row['id']);    	 ?> </td>
	 	 <td> <?php printf("%s", $row['last_name']);     ?> </td>
    		 <td> <?php printf("%s", $row['first_name']);    ?> </td>
		 <td> <?php printf("%s", $row['userId']);        ?> </td>
         	 <td> <?php printf("%s", $row['comments']);      ?> </td>
	         <td> <?php printf("%s", $row['start_date']);    ?> </td>
	    </tr>    

        <?php
            }
            mysqli_free_result($wynik);  #zwalnia pamięć zarezerwowaną na tablicę $wynik
        ?>

        </tbody>
        </table>
	
        <?php
            mysqli_close($id_conn);  # zamyka połączenie z bazą
        ?>

    </body>
</html>

