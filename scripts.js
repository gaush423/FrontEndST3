function validateform(){  
    var name=document.myform.name.value;
    var x=document.myform.email.value; 
    var num=document.myform.mobile.value;
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");

    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
    }
    else if (isNaN(num)){  
      alert("Enter Numeric value only");
      return false;    
    }  
}     