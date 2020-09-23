import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";

const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();

    console.log(history);


    return(
        <React.Fragment>
           <div className="thanks">
             <p>Thanks <strong>{name}!!</strong></p>
             <p>You joined <strong>{history.location.state}</strong></p>
           
            <hr/>
            <p><strong>Disclaimer : </strong>Will reach you soon</p>
           
           </div>
        </React.Fragment>
    )

}


export default Thanks;