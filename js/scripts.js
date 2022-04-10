$(document).ready(function () {
  $("form#survey").submit(function (event) {
    event.preventDefault();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    let result;
    if (question1 === "yes") {
      result = "Your first best programming language to learn is C#";
    } else if (question2 === "yes" && question5 === "yes") {
      result = "Your first best programming language to learn is JavaScript";
    } else {
      result = "Your first best programming language to learn is Ruby";
    }
    $("#output").text(result);
  });
});