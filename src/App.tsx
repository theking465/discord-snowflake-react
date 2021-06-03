import React, {useState} from "react";
import "./App.css";

function App() {

	const [inputValue, setInputValue] = useState("");
	const [timeZone, setTimeZone]  = useState<number>();

	const toDate = (id :string) : Date => {
		return new Date(Number((BigInt(id) >> 22n) + 1420070400000n));
	};

	const handleIdChange = async (event:any) => {
		setInputValue(event.target.value);
	};

	const isValidSnowflake = (id: string) => {
		if(id === "") return false;
		return id.match(/^[0-9]*$/);
	};

	const handleTimeZoneChange = (event:any) => {
		setTimeZone(event.target.value);
	};

	return(
		<div className = "root" >
			<h1 className="title">Discord snowflake</h1>
			<div className="input">
				<input className="idInput" value={inputValue} onChange={handleIdChange}></input>
				<input className="zoneInput" value={timeZone} onChange={handleTimeZoneChange} ></input>
			</div>
			<div className="date">
				{isValidSnowflake(inputValue) ?
					<div className="valid">
						{toDate(inputValue).toLocaleString()}
					</div>
					:
					<div className="invalid">
						invalid snowflake
					</div>
				}
			</div>
		</div>
	);
}

export default App;