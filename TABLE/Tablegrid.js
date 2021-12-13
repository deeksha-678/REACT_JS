import React from 'react';

  
function Tablegrid() {
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>ReactJS Reactstrap Table Component</h4>
            <table class="table table-sm">


                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dummmy</td>
                        <td>25</td>
                        <td>578899</td>
                        <td>abc@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Raj</td>
                        <td>33</td>
                        <td>987542245</td>
                        <td>xyz@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Lucky</td>
                        <td>23</td>
                        <td>5632600</td>
                        <td>mnb@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
  
export default Tablegrid;
