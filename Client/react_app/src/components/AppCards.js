import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./AppCards.css";

const initialFilterState = {
  zip: null,
  restaurantType: null,
  startTime: null,
  endTime: null,
  scheduleDate: null,
  restaurantID: null,
  managerName: null
}
class AppCards extends Component {
  state = {
    filterValues: initialFilterState
  };
  constructor(props) {
    super(props);
    this.onChangeTextFieldZipCode = this.onChangeTextFieldZipCode.bind(this);
    this.onChangeTextFieldRestaurantType = this.onChangeTextFieldRestaurantType.bind(
      this
    );
    this.onChangeTextFieldStartTime = this.onChangeTextFieldStartTime.bind(this);
    this.onChangeTextFieldEndTime = this.onChangeTextFieldEndTime.bind(this);
    this.onClickResultButton = this.onClickResultButton.bind(this);
    this.onChangeTextFieldSchedule = this.onChangeTextFieldSchedule.bind(this);
    this.onChangeTextManagerName = this.onChangeTextManagerName.bind(this);
  }

  onChangeTextManagerName(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        employeeName: e.target.value
      }
    });
  }

  onChangeTextFieldZipCode(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        zip: e.target.value
      }
    });
  }

  onChangeTextFieldRestaurantType(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        restaurantType: e.target.value
      }
    });
  }

  onChangeTextFieldStartTime(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        startTime: e.target.value
      }
    });
  }
  onChangeTextFieldEndTime(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        endTime: e.target.value
      }
    });
  }

  onChangeTextFieldSchedule(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        scheduleDate: e.target.value
      }
    });
  }

  onChangeTextFieldRestaurantId(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        restaurantID: e.target.value
      }
    });
  }

  onChangeTextFieldManagerName(e) {
    this.setState({
      filterValues: {
        ...this.state.filterValues,
        managerName: e.target.value
      }
    });
  }

  onClickResultButton() {
    this.setState({ filterValues: initialFilterState })
  }

  render() {
    // query 1
    const onClickGetRestaurantBelowAGR = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getBelowAverage?zip=${this.state.filterValues.zip}`
        )
        .then(res => {
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 2
    const onClickGetAvgRevenueOfRestaurants = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getAvgGrossRevenue?zip=${this.state.filterValues.zip}`
        )
        .then(res => {
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 3
    const onClickGetRestaurantByCusine = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getRestaurantsForZipAndType?zip=${this.state.filterValues.zip}&restaurantType=${this.state.filterValues.restaurantType}`
        )
        .then(res => {
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 4
    const onClickGetDishByTime = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getDishesInTimeRange?startTime=${this.state.filterValues.startTime}&endTime=${this.state.filterValues.endTime}`
        )
        .then(res => {
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 5
    const onClickGetEmptyBuilding = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getEmptyBuildings`
        )
        .then(res => {
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 6
    const onClickGetAvgRentOfBuilding = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getAvgRentForZip?zip=${this.state.filterValues.zip}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 7
    const onClickGetProfitByEachServer = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getAvgProfitForServers`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 8
    const onClickGetServerWithBelowAvgTip = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getServerTipBelowAvg`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 9
    const onClickGetHighestProfitDish = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getHighestProfitDishes`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 10
    const onClickGetServersNotScheduled = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getServersNotScheduled?scheduleDate=${this.state.filterValues.scheduleDate}&startTime=${this.state.filterValues.startTime}&endTime=${this.state.filterValues.endTime}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 11
    const onClickGetOperatingCost = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getLocationCost?zip=${this.state.filterValues.zip}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 12
    const onClickGetRestuarantOfSameTypeInSameArea = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getRestaurantForTypeInArea?zip=${this.state.filterValues.zip}&restaurantType=${this.state.filterValues.restaurantType}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 13
    const onClickGetEmployeesAtLocation = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getEmployeesAtLocation?restaurantID=${this.state.filterValues.restaurantID}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    // query 15
    const onClickGetRestaurantsForManager = () => {
      this.props.setModalState(true);
      axios
        .get(
          `http://localhost:5000/getRestaurantsForManager?employeeName=${this.state.filterValues.employeeName}`
        )
        .then(res => {
          console.log(res.data);
          this.props.setResponseDetails(res.data);
        });
      this.onClickResultButton()
    }

    return (
      <div className="AppCards__cards">
        {/* Query Card 1 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get the average gross revenue of all restaurants
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  label="In Given Zip Code"
                  variant="outlined"
                  required="true"
                  onChange={this.onChangeTextFieldZipCode}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetAvgRevenueOfRestaurants}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 2 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of restaurants with
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="In Given Zip Code"
                  variant="outlined"
                  onChange={this.onChangeTextFieldZipCode}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="For Restaurant Type"
                  variant="outlined"
                  onChange={this.onChangeTextFieldRestaurantType}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetRestaurantByCusine}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 3 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                List all restaurants making below the average gross revenue
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  label="In Given Zip Code"
                  variant="outlined"
                  required="true"
                  onChange={this.onChangeTextFieldZipCode}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetRestaurantBelowAGR}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 4 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of dishes sold during
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="Start Time"
                  variant="outlined"
                  onChange={this.onChangeTextFieldStartTime}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="End Time"
                  variant="outlined"
                  onChange={this.onChangeTextFieldEndTime}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetDishByTime}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 5 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of buildings with no restaurants
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetEmptyBuilding}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 6 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get the average rent of all buildings
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  label="In Given Zip Code"
                  variant="outlined"
                  required="true"
                  onChange={this.onChangeTextFieldZipCode}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetAvgRentOfBuilding}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 7 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get the profit generated by each server
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetProfitByEachServer}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 8 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of servers with average tips below the total average tips of all servers.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetServerWithBelowAvgTip}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 9 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of the highest profit generating dishes
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetHighestProfitDish}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 10 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of servers at a location who are not scheduled
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="Schedule"
                  variant="outlined"
                  onChange={this.onChangeTextFieldSchedule}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="Start Time"
                  variant="outlined"
                  onChange={this.onChangeTextFieldStartTime}
                />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="End Time"
                  variant="outlined"
                  onChange={this.onChangeTextFieldEndTime}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetServersNotScheduled}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>

        {/* Query Card 15 */}
        <div className="AppCards__card">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Get a list of restaurants owned by a specific manager.
              </Typography>
              <Typography className="" color="textSecondary">
                <br />
                <TextField
                  id="outlined-basic"
                  required="true"
                  label="Manager Name"
                  variant="outlined"
                  onChange={this.onChangeTextManagerName}
                />
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={onClickGetRestaurantsForManager}
              >
                Show Results
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default AppCards;
