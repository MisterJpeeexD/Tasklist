const TaskName = document.querySelector("#task-name")
const TaskRemark = document.querySelector("#task-remark")
const CreateTaskBtn = document.querySelector(`#create-btn`)
const TaskMenu = document.querySelector(`#task-sec`) 
const TaskDoneBtn = document.querySelector(`#done-btn`)

function CreateTask(title,remark){
    const TableRow = document.createElement("tr");
    const TableCellBtn = document.createElement("td");
    const AddBtn = document.createElement("button");
    AddBtn.classList.add("done-btn")
    AddBtn.textContent = "✅";
        AddBtn.addEventListener("click", function() {
        AddBtn.closest("tr").remove();})
    TableCellBtn.appendChild(AddBtn)
    TableRow.appendChild(TableCellBtn)
    const TableCellTxt = document.createElement("td");
    const TableRowDiv = document.createElement("div");
    TableRowDiv.classList.add("task-container")
    const TaskTitle = document.createElement("h3")
    TaskTitle.textContent = title;
    const TaskRemark = document.createElement("p");
    TaskRemark.textContent = remark;
    TableRowDiv.appendChild(TaskTitle)
    TableRowDiv.appendChild(TaskRemark)
    TableCellTxt.appendChild(TableRowDiv);
    TableRow.appendChild(TableCellTxt)
    TaskMenu.appendChild(TableRow)
}

CreateTaskBtn.addEventListener("click",function(event){
    event.preventDefault()
    const valueTle = TaskName.value;
    const valueRmk = TaskRemark.value;
    CreateTask(valueTle,valueRmk)
    TaskName.value = "";
    TaskRemark.value = "";
})