P1_name = localStorage.getItem("L1")
P2_name = localStorage.getItem("L2")

P1_score = 0;
P2_score = 0;

document.getElementById("P1_name").innerHTML = P1_name + ":";
document.getElementById("P2_name").innerHTML = P2_name + ":";

document.getElementById("P1_score").innerHTML = P1_score;
document.getElementById("P2_score").innerHTML = P2_score;

document.getElementById("player_question").innerHTML = "Question Turn :" + P1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn :" + P2_name

function send()
{
    get_word = document.getElementById("word").value;
    lower = get_word.toLowerCase();
    console.log("Input in lowercase = " + lower)

    index_last = lower.length - 1;
    last = lower.charAt(index_last)
    console.log("Last letter is... " + last)

    //o1 = lower.replace(sl,"_")//
    //o2 = o1.replace(middle, "_")//
    o3 = lower.replace(last, "_")
    console.log(o3)

    question = "<h4> Question = " + o3 + "</h4><br>"
    input = "Answer = <input type='text' placeholder='Type your answer' id='input1'><br><br>";
    button = "<button class='btn btn-info' onclick='check()'>check</button>";

    row = question + input + button

    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = "";
}

question_turn = "p1";
answer_turn = "p2";

function check()
{
    get_answer = document.getElementById("input1").value;
    answer1 = get_answer.toLowerCase();
    console.log("Answer in lower case is equal to " + answer1);

if(answer1 == lower)
{
    if(answer_turn == "p1")
    {
        P1_score = P1_score+1
        document.getElementById("P1_score").innerHTML = P1_score
    }
    else
    {
        P2_score = P2_score+1
        document.getElementById("P2_score").innerHTML = P2_score
    }
}

if(question_turn == "p1")
{
    question_turn = "p2"
    document.getElementById("player_question").innerHTML = "Question Turn " + P2_name
}
else
{
    question_turn = "p1"
    document.getElementById("player_question").innerHTML = "Question Turn " + P1_name
}

if(answer_turn == "p1")
{
    answer_turn = "p2"
    document.getElementById("player_answer").innerHTML = "Answer Turn " + P2_name
}

else
{
    answer_turn = "p1"
    document.getElementById("player_answer").innerHTML = "Answer Turn " + P1_name
}
document.getElementById("output").innerHTML = "";
}