
var send = document.getElementById("send");
send.onclick= function(){

    var student_degree = document.getElementById("degree").value;
    var A, B, C, D, F;
    A = 85;
    B = 75;
    C = 65;
    D = 50;
    F = 0;

    switch(student_degree == student_degree ){
        case (student_degree >= A) :
            document.write("The student degree : A");
        break
        case (student_degree >= B) :
            document.write("The student degree : B");
        break
        case (student_degree >= C) :
            document.write("The student degree : C");
        break
        case (student_degree >= D) :
            document.write("The student degree : D");
        break
        case (student_degree >= F) :
            document.write("The student degree : F");
        break
        default:
            document.write("Error, Try again");
    
    }
}