import './popup.css'

const Popup = (props) =>{
    function onSubmit(e){
        e.preventDefault();
        console.log(e.target);
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        console.log(e.target[2].checked);
        let priority = 1;
        if(e.target[4].checked){
            priority = 1
        }
        else if(e.target[3].checked){
            priority = 2
        }
        else if(e.target[2].checked){
            priority = 3
        }
        let task = {
            description: e.target[0].value,
            date: e.target[1].value,
            priority: priority
        }
        props.submitTask(task);
        props.setTrigger(false);
    }
    return(props.trigger) ? (
        <div className="popup"  onClick={(e)=>{
            if(e.target.className === 'popup'){
                props.setTrigger(false);
            }
          }} >
            <div className="popup-inner">
                <form onSubmit={(e)=>onSubmit(e)}>
                    <h3>Task</h3>
                    <input className='formElements' type='text' id='description' placeholder='Description' required/>
                    <input className='formElements' type='date' id='date' placeholder='Date' required/>
                    <div className='readBookDiv'>
                    Priority
                    <div className="rate">
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text"></label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text"></label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text"></label>
                    </div>
                    </div>
                    <button className='submitBook'  type='Submit'>Add</button>
                </form>
            </div>
        </div>
    ): "";
}

export default Popup;