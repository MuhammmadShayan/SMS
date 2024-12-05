'use client'

import {useRouter} from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const handleRedirect = () => {
    router.push('/dashboard'); 
  };

  return (
  <div>
    

<section className="login-block">
  {/* Container-fluid starts */}
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        {/* Authentication card start */}
        <form className="md-float-material form-material">
          <div className="text-center">
            <img style={{width:"150px"}} src="/smslogo.png" alt="logo.png" />
          </div>
          <div className="auth-box card">
            <div className="card-block">
              <div className="row m-b-20">
                <div className="col-md-12">
                  <h3 className="text-center">Sign In</h3>
                </div>
              </div>
              <div className="form-group form-primary">
                <input type="text" name="email" className="form-control" required />
                <span className="form-bar" />
                <label className="float-label">Your Email Address</label>
              </div>
              <div className="form-group form-primary">
                <input type="password" name="password" className="form-control" required />
                <span className="form-bar" />
                <label className="float-label">Password</label>
              </div>
              <div className="row m-t-25 text-left">
                <div className="col-12">
                  <div className="checkbox-fade fade-in-primary d-">
                    <label>
                      <input type="checkbox" defaultValue />
                      <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary" /></span>
                      <span className="text-inverse">Remember me</span>
                    </label>
                  </div>
                  <div className="forgot-phone text-right f-right">
                    <a href="#" className="text-right f-w-600"> Forgot Password?</a>
                  </div>
                </div>
              </div>
              <div className="row m-t-30">
                <div className="col-md-12">
                  <button type="button" onClick={handleRedirect} className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Sign in</button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-10">
                  <p className="text-inverse text-left m-b-0">Thank you.</p>
                  <p className="text-inverse text-left"><a href="index.html"><b>Back to website</b></a></p>
                </div>
                <div className="col-md-2">
                  <img src="assets/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* end of form */}
      </div>
      {/* end of col-sm-12 */}
    </div>
    {/* end of row */}
  </div>
  {/* end of container-fluid */}
</section>

  </div>
  );
}
