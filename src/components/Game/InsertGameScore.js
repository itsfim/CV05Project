function InserGameScore(props) {
 
    const handleSelect = (event) => {
  
        const formData = new FormData();
        formData.append('TimeScore', event.target.value);
        formData.append('UserID', props.GameScore.UserID);
       
        const token = localStorage.getItem('token'); 
       
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/addgamescore",
          {
            method: 'POST',
            headers: new Headers( { "Authorization": "Bearer " + token}),
            body: formData
          })
        .then(
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
            props.handleInsert()
          })
        .catch(
          (e) => {
            console.log(e.message)
          })
      }
}
export default InserGameScore;