function login(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Logging in..")
            const loggedIn = true;
            if(loggedIn){
                resolve("Login successful");
            }
            else{
                reject("Unable to Login");
            }
        },200);
    });
}
function loadProfile(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Loading profile...")
            const profileLoaded = true;
            if(pageLoaded){
                resolve("Profile Loaded");
            }
            else reject("Profile not loaded");
        },100);
    });
}
function startCourse(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Starting the course...");
            const courseStarted =true;
            if(courseStarted){
                resolve("Course Started");
            }
            else reject("Unable to start the course");
        },400);
    });
}
function completeExercise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Completing exercise...")
            const exerciseCompleted =true;
            if(courseCompleted){
                resolve("Exercise Completed");
            }
            else reject("Exercise not completed");
        },200);
    });
}
function submitAssignment(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Submitting Assignment...");
            const assignmentSubmitted = true;
            if(assignmentSubmitted){
                resolve("Assignment Submitted");
            }
            else{
                reject("Assignment not submitted");
            }
        },1000);
    });
}
function logOut(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("logging out");
            const loggedOut = true;
            if(loggedOut){
                resolve("Logged out");
            }
            else reject("Couldn't Log out");
        },500);
    });
}
async function runpage(){
    const li = await login();
    console.log(li);
    const lp = await loadProfile();
    console.log(lp);
    const 
}