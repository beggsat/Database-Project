import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ResponseDialog extends Component {

  constructor(props) {
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.props.isModalOpen = true
    this.props.setModalState(true)
  }

  handleClose() {
    this.props.setModalState(false)
  }
  render() {
    if (this.props.isModalOpen) {
      let responseDetails = this.props.responseDetails
      const displayResponse = () => {
        if (responseDetails && responseDetails.length > 0) {
          const keysInTable = Object.keys(responseDetails[0])
          return (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              </DialogContentText>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {keysInTable.map(key => (
                      <TableCell>{key}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responseDetails.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        {Object.entries(row).map(([key, value]) => {
                          return <TableCell key={value}component="th" scope="row">
                            {value}
                          </TableCell>
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </DialogContent>
          )
        }
        return (
          <DialogContentText id="alert-dialog-description" >
            No records to display.
          </DialogContentText >
        )
      }


      return (
        <div>
          <Dialog
            open={this.props.isModalOpen}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Response Details"}
            </DialogTitle>
            {displayResponse()}
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div >
      );
    }
    return null;
  }
}

export default ResponseDialog;
