function func1(){
    let arr=document.getElementById("Range").value.split("-");
    let l=parseInt(arr[0]);
    let u=parseInt(arr[1]);
        document.write('<p><b>SQUARES AND CUBES FROM 0 TO 10</b></p>');
        document.write('<table border="2" cellspacing="2">');
        document.write('<th> Number </th> <th> Square </th> <th> Cube </th>');
        for(var i=l;i<=u;i++)
            document.write("<tr><td>"+ i +"</td><td>"+ i*i + "</td><td>"+ i*i*i +"</td></tr>");
        document.write("</table>");
    
}