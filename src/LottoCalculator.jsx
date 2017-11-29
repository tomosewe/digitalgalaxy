import React from 'react';

const NUMBER_OF_WEEKS_PER_YEAR = 52;
const AVERAGE_COST_OF_LOTTO_TICKET = 16;

class LottoCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfTicketsPerWeek: 1,
      currentAge: 25,
      retirementAge: 65,
      savingsByRetirement: 1,
    };
  }

  calculateFinalCost() {
    this.setState((prevState, props) => ({
      savingsByRetirement: (prevState.numberOfTicketsPerWeek * AVERAGE_COST_OF_LOTTO_TICKET * NUMBER_OF_WEEKS_PER_YEAR) * (prevState.retirementAge - prevState.currentAge)
    }));
  }

  componentDidMount() {
    this.calculateFinalCost();
  }

  handleLottoTickets = (e) => {
    this.setState({ numberOfTicketsPerWeek: e.target.value });
    this.calculateFinalCost()
  }

  handlecurrentAge = (e) => {
    this.setState({ currentAge: e.target.value });
    this.calculateFinalCost()
  }

  handleRetirementAge = (e) => {
    this.setState({ retirementAge: e.target.value });
    this.calculateFinalCost()
  }


  render() {
    return (
      <div className="lottoMain">
        <div className="lottoInputs">
          <label htmlFor="currentAge">Current Age: </label>
          <input type="number" value={this.state.currentAge} id="currentAge" onChange={this.handlecurrentAge} />
          <br />
          <br />          
          <label htmlFor="retirementAge">Retirement Age: </label>
          <input type="number" value={this.state.retirementAge} id="retirementAge" onChange={this.handleRetirementAge} />
          <br />
          <br />
          <label htmlFor="numberOfLottoTickets">How many lotto tickets do you buy each week: </label>
          <input type="number" value={this.state.numberOfTicketsPerWeek} id="numberOfLottoTickets" onChange={this.handleLottoTickets} />
        </div>
        <br />
        <div>
          If you stop buying lotto tickets today, you will have saved <strong>${this.state.savingsByRetirement.toLocaleString()}</strong> for your retirement.
        </div>
      </div>
    );
  }
}

export default LottoCalculator;