import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../components/NavItem'
import ProfMenu from '../components/ProfMenu.js';
import { loadScripts, scripts } from '../utils/withScripts';





class PaymentsHis extends Component {
constructor(props){
super(props);
loadScripts(scripts);
}
render(){
return (


<Fragment>



<div className="container  margin-bottom-100 margin-top-50">
  <div className="row">





    <div class="col-md-12">
    <ProfMenu/>



                                <div className="col-md-8">


                          <table className="basic-table margin-bottom-50">

                            <tbody><tr>
                              <th>Column 1</th>
                              <th>Column 2</th>
                              <th>Column 3</th>
                              <th>Column 4</th>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>

                            <tr>
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>


                            <tr className="borderSpacing: em;">
                              <td>Item</td>
                              <td>Description</td>
                              <td>third thing</td>
                              <td>forth thing</td>
                            </tr>





                          </tbody></table>
                        </div>
  </div>
  </div>
</div>

</Fragment>




)
}
}

export default PaymentsHis;
