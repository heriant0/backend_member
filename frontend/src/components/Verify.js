import React, {useEffect, useState} from 'react';
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
	const [email, setEmail] = useState('');
	// const navigate = useNavigate();

	useEffect(() => {
		verifyEmail();
	});

  const verifyEmail = async (e) => {
		if (e) {
			e.preventDefault();
			try {
				let data;
				const result = await axios.post(process.env.REACT_APP_BACKEND_URL, {
					email,
				});
				console.log(result.data, 'RESULT')
				if (result.data) {
					console.log('KE LIST CARD DONG')
				} else {
					setEmail(result.data)
				}
		
			} catch (e) {
				console.log(e, 'ERROR')
			}
		}
  };
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<h1>AWARD</h1>
					<h5>Enter your email address to sign in and continue</h5>
						<form onSubmit={verifyEmail}>
							<div className="form-group">
								<input 
									type="email" className="form-control" 
									placeholder="Email address" 
									value={email} 
									onChange={e => setEmail(e.target.value)}
									required/>
							</div>
							<button type="submit" class="btn btn-primary btn-lg btn-block">Sign In</button>   
						</form>
				</div>
			</div>
		</div> 
	);
}

export default Verify;