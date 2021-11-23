import React from 'react'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {CardHeader, MuiThemeProvider} from "@material-ui/core";
import Card from "@mui/material/Card";
export default class ExpandableCard extends Component {
    render(){
        var populate = data.map(function (value) {
            return(
                <MuiThemeProvider>
                    <Card>
                        <CardHeader
                            title={value.Episode_Name}
                            subtitle={value.description}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            {value.content}
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            )
        });
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        {populate}
                    </div>
                    <FloatingActionButton className="floatingButton" backgroundColor='#293C8E'>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </MuiThemeProvider>
        );
    }
}
