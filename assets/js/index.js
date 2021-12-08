// alert
$("#add_user").submit(function (event) {
  alert("data inserted successfully");
});

$("#update_user").submit(function (event) {
  event.preventDefault(); // IMPORTANT: need values even after submit form
  let unindexed_array = $(this).serializeArray();
  data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);
  let request = {
    url: `http://localhost:5001/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    let request = {
      url: `http://localhost:5001/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}

// alert
$("#add_products_form").submit(function (event) {
  alert("data inserted successfully");
  location.reload();
});

$("#update_product_form").submit(function (event) {
  event.preventDefault(); // IMPORTANT: need values even after submit form
  let unindexed_array = $(this).serializeArray();
  data = {};
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);
  let request = {
    url: `http://localhost:5001/api/products/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
    location.reload();
  });
});

// if (window.location.pathname == "/products-list") {
//   $ondelete = $(".table tbody td a.delete");
//   $ondelete.click(function () {
//     let id = $(this).attr("prod-data-id");

//     let request = {
//       url: `http://localhost:5001/api/products/${id}`,
//       method: "DELETE",
//     };

//     if (confirm("Do you really want to delete this record?")) {
//       $.ajax(request).done(function (response) {
//         alert("Data Deleted Successfully!");
//         location.reload();
//       });
//     }
//   });
// }

$(".trash_product_btn").click(function () {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("prod-data-id");

    let request = {
      url: `http://localhost:5001/api/products/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
});
