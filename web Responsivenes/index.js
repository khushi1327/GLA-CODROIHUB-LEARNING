function text(){
    if(true){
        var a=10; //functional scoped
        let b=20; // block scoped
        const c= 30; //block scoped
    }
    console.log(a); //work krege
    console.log(b); //not working
    console.log(c); //not working because block ke ander likhne hoge tbhi chalege
    

}