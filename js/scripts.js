$(document).ready(function () {




  $("#form1").submit(function (event) {
    event.preventDefault();

    // Empties the div for a new list
    $("#myList").empty();

    // let list = document.getElementById("myList");
    let listElement = document.createElement("ul");
    document.getElementById("myList").appendChild(listElement);


    const names = $("#name").val();
    const places = $("#place").val();
    const foods = $("#food").val();
    const addresses = $("#address").val();

    const array1 = [];
    const array2 = [];

    array1.push(names, places, foods, addresses);
    array2.push(array1[1], array1[0], array1[2]);

    array1.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      listElement.appendChild(li);
    });

    // array2.forEach((item) => {
    //   let li = document.createElement("li");
    //   li.innerText = item;
    //   listElement.appendChild(li);
    // });


    // Sets previous array length to 0, effectively clearing the contents.
    // array1.length = 0;

    //   array2.forEach((item)=>{
    //     let li = document.createElement("li");
    //     li.innerText = item;
    //     list.appendChild(li);
    // });


  });
});

