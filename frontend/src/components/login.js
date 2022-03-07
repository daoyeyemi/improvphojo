import React from 'react'

const login = () => {
    return (
        <>
            <header style={{ fontSize: "70px", textAlign: "center", margin: "100px auto 20px auto" }}>phojo</header>
            <h4 style={{ textAlign: 'center', font: "gray" }}>your very own personal photo journal</h4>
            <h1 style={{ textAlign: 'center', margin: "30px auto" }}>login</h1>
            <form onSubmit={handleSubmit} style={{ width: "450px", margin: "10px auto" }}> 
                <div>
                    <input onChange={handleChange} style={{ margin: "10px auto" }} className="form-control" name="username" type="text" placeholder="input username here" aria-label="username" required />
                </div>
                <div>
                    <input onChange={handleChange} style={{ margin: "10px auto" }} className="form-control" name="password" type="text" placeholder="input password here" aria-label="password" required />
                </div>
                <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p style={{ textAlign: "center", margin: "15px" }}>don't have an account? sign up <Link to={"/signup"} style={{ textDecoration: "none", NamefontColor: "red"}}>here</Link></p>
        </>
    );
}

export default login