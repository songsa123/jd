<?php

    header("Content-Type:text/html;charset=utf-8;");
    #1. 从前端拿来数据;
    $username = @$_POST["username"];
    $password = @$_POST["password"];
    $email = @$_POST["email"];
    $QQ = @$_POST["QQ"];
    $phone = @$_POST["phone"];
    $person = @$_POST["person"];
    if($username == "" || $password == ""){
        die("参数不全");
    }
    #2. 把数据放入到数据库之中;
    // 1. 如何连接数据;
    // mysql_connect(servername,username,password);
    $con = mysql_connect("localhost","root","123456");   //参数1：数据库连接的主机地址（连接地址）；参数2：连接的数据库用户名；参数3：连接的数据库密码；
    if(!$con){
        // echo "数据库连接成功";
        die("数据库连接失败");    // die 与return很像·   表示终止并返回代码。
    }
    mysql_select_db("userlist", $con);  // 选择要操作的数据库； 有返回值；如果成功，则该函数返回 true。如果失败，则返回 false。
    // 判定是否存在相同用户名;  
    // $result = mysql_query("SELECT * FROM detaillist");
    $result = mysql_query(                                    //mysql_query() 仅对 SELECT，SHOW，EXPLAIN 或 DESCRIBE 语句返回一个资源标识符，如果查询执行不正确则返回 FALSE。
     //对于其它类型的 SQL 语句，mysql_query() 在执行成功时返回 TRUE，出错时返回 FALSE。
                "SELECT username FROM       
                detaillist1 WHERE username='$username'"          
    );
    // echo $result;                                           // resource资源数据表示未解析的数据
    $count = 0;
    while($row = mysql_fetch_array($result)){   // php提供的一个遍历方法，每次遍历都把$result变成PHP里面的数组
        // echo json_encode($row) . "</br>";    以json的形式输出
        $count ++;
    }
    // 用户名重名
    if($count != 0){
        die("用户名重名");
    }
    // 加密密码;
    $password = md5($password);
    mysql_query("INSERT INTO detaillist1 (password, username,email,QQ,phone,person)     
    VALUES ('$password', '$username','$email','$QQ','$phone','$person')");      // 向数据库里写入东西
    if(mysql_error()){                         //如果有错误，就输出数据库错误和错误信息
        die("数据库错误".mysql_error());
    }
    echo "注册成功";

?>