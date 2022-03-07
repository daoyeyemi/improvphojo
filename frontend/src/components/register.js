import React from 'react'

const Register = () => {
  return (
        <>
            <header style={{ fontSize: "70px", textAlign: "center", margin: "100px auto 20px auto" }}>phojo</header>
            <h4 style={{ textAlign: 'center', fontColor: "gray" }}>your very own personal photo journal</h4>
            <h1 style={{ textAlign: 'center', margin: "30px auto" }}>sign up</h1>
            <form onSubmit={handleSubmit} style={{ width: "450px", margin: "10px auto" }}>
                <input onChange={handleChange} value={user.first_name} style={{ margin: "10px auto" }} name="first_name" className="form-control" type="text" placeholder="input first name here" aria-label="first name" required />
                <input onChange={handleChange} value={user.last_name} style={{ margin: "10px auto" }} name="last_name" className="form-control" type="text" placeholder="input last name here" aria-label="last name" required />
                <input onChange={handleChange} value={user.username} style={{ margin: "10px auto" }} name="username" className="form-control" type="text" placeholder="input username here" aria-label="username" required />
                <input onChange={handleChange} value={user.password} style={{ margin: "10px auto" }} name="password" className="form-control" type="password" placeholder="input password here" aria-label="password" required />
                <input onChange={handleChange} value={user.confirm_password} style={{ margin: "10px auto" }} name="confirm_password" className="form-control" type="password" placeholder="verify password here" aria-label="confirm password" required />
                <button style={{ width: "100%", margin: "2.5px auto" }} type="submit" className="btn btn-primary">Submit</button>
                <p style={{ textAlign: "center", margin: "15px" }}>already have an account? login <Link to={"/login"} style={{ textDecoration: 'none', fontColor: "red"}}>here</Link></p>
            </form>
        </>
    );
}

export default register