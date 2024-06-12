
    let team1;
    let team2;
    let bat1;
    let bat2;
    let fb;
    let sb;
    let options=["Bat","Bowl"];
    let randomTeam;
    let toss;
    let wt;
    let wteam=new Array(11);
    let mum=["Rohit Sharma","Ishan Kishan","SKY","Tilak Varma","Hardhik Pandya ","Nehal Wadhera","Tim David","R Shepherd","Piyush Chawla","Nuwan Tushara","Jasprit Bumrah"];
    let ben=["Virat Kohli","Faf Du Plesis","C Green","Glenn MaxWell","Rajat Patidhar","Dinesh Karthik","Swapnil Singh","L Ferguson","Karn Sharma","Yash Dayal","Mohammed Siraj"];
    let che=["Ruturaj Gaikwad","Rachin Ravindra","Ajinkya Rahane","Daryl Mitchel","Raveendra Jadeja","Mitchel Santner","M S Dhoni","Shardhul Thakur","Tushar DeshPande","Mahesh Theeskhana","Samarjeet Singh"];
    let sun=["Travis Head","Abhishek Sharma","Rahul Tripathi","N K Reddy","Shahbaz Ahmed","Henrich Klassen","Abdul Samad","Pat Cummins","Bhuvaneswar","V Viyaskanth","T Natarajan"];
    let kol=["R Gurbaz","Sunil Narine","Venkatesh Iyer","Shreyas Iyer","Rinku Singh","Andre Russel","Ramandeep Singh","Mitchel Starc","Varun Chakravarthi","Harshith Rana","Vaibhav Arora"];
    let raj=["Yasaswi Jaiswal","TKC","Sanju Samson","Riyan Parag","Dhruv Jurel","Simron Hetmyer","Rovman Powell","Ravichandran Ashwin","Yujwendra Chahal","Trent Boult","Sandeep Sharma"];
    let guj=["B Sai Sudarsan","Shubman Gill","Sharukh Khan","David Miller","Mathew Wade","Rahul Tewatia","Rashid Khan","Noor Ahmed","Mohit Sharma","Umesh Yadav","Sandeep Warrier"];
    let luk=["K L Rahul","Devdutt Padikkal","Marcus Stoins","Deepak Hooda","Nicholus Pooran","Arshad Khan","Ayush Badoni","Krunal Pandya","Ravi Bishnoi","Matt Henry","N ul Haq"];
    let del=["Jake Fraser MecGurk","Abhishek Porel","Shai Hope","Rishabh Pant","Tristan Stubbs","Axar Patel","Gulbadin Naib","Mukesh Kumar","Kuldeep Yadav","Khaleel Ahmed","Ishanth Sharma"];
    let pun=["Adharva Taide","Prabsimran Singh","R Rossouw","Shasank Singh","Jitesh Sharma","Ashutosh Sharma","Harpreet Brar","Sam Curran","Kagiso Rabada","Harshal Patel","Arshdeep Singh"];

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
   async function getTeams() {
    const urlParams = new URLSearchParams(window.location.search);
    team1 = urlParams.get('hiddenTeam1');
    team2 = urlParams.get('hiddenTeam2');
  
    if (team1 && team2) {
      document.getElementById('t1').textContent=`${team1}`;
      document.getElementById('t2').textContent=`${team2}`;
      
    } else {
      document.getElementById('teams').textContent = 'No teams selected!';
    }
    await sleep(1500);
  }
  async function tossWinner(team1, team2) {
    console.log("Toss");
    randomTeam = Math.random() < 0.5 ? team1 : team2;
    toss = Math.random() < 0.7 ? options[1] : options[0]; // 70% chance of Bowl
    document.getElementById('toss').textContent = `${randomTeam} Won The Toss And Elected To ${toss} First`;
  }
  function tosstime(){
    document.getElementById("TossTime").textContent=`Its Toss Time`;
  }
  function battingorder(team1,team2,toss,randomTeam){
    if((randomTeam==team1 && toss=='Bat')||(randomTeam==team2 && toss=='Bowl')){
      bat1=team1;
      bat2=team2;
    }

    else{
      bat1=team2;
      bat2=team1;

    }
    return {bat1 ,bat2};
  }
  function predS() {
    return Math.floor(Math.random() * (241 - 160 + 1)) + 160;
  }
  function predW(){
    return Math.floor(Math.random()*(10-5+1))+5;
  }
  function firstinn(fs,fw){
    document.getElementById("inn1").textContent=`${fb}: ${fs}/${fw}`;
  }
  function Secondinn(ss,sw){
    document.getElementById("inn2").textContent=`${sb}: ${ss}/${sw}`;
  }
  function Winner(){
    console.log(fs,ss);
    if(fs>ss){
      let diff=fs-ss;
      document.getElementById("winner").textContent=`${fb} Won By ${diff} Runs`;
      wt=fb;
    }
    else if(fs==ss){
      document.getElementById("winner").textContent=`Match Drawn...!!!`
    }
    else {
      let wkts=10-sw;
      document.getElementById("winner").textContent=`${sb} Won By ${wkts} Wickets`;
      wt=sb;
    }
  }
  function manom()
  {
   
    switch(wt){
      case 'CSK':wteam=che;
                  break;
      case 'RCB':wteam=ben;
                  break;
      case 'MI':wteam=mum;
                  break;
      case 'SRH':wteam=sun;
                  break;
      case 'KKR':wteam=kol;
                  break;
      case 'LSG':wteam=luk ;
                  break;
      case 'GT':wteam=guj;
                  break;
      case 'DC':wteam=del;
                  break;
      case 'RR':wteam=raj;
                  break;
      case 'PBKS':wteam=pun;             
                  break;
      default:
        console.log("Invalid Team Name");
   }
    let inx=Math.floor(Math.random()*(10-0+1))+0;
    console.log(inx);
    document.getElementById("mom").textContent=`Man Of The Match :${wteam[inx]}`;
  }
 
  
  
  async function main() {
    
    await getTeams(); // Wait for teams to be fetched
    tosstime(); // Start the toss time delay
    await sleep(2000); // Wait for toss time delay
    tossWinner(team1, team2);  // Now teams are defined
    await sleep(1000);
    const batord=battingorder(team1,team2,toss,randomTeam);
    fb=batord.bat1;
    sb=batord.bat2;
    await sleep(1000);
    firstinn(fs,fw);
    await sleep(1000)
    document.getElementById("innbr").textContent=`Innings Break...!!!`
    await sleep(1000);
    Secondinn(ss,sw);
    await sleep(1500);
    Winner();
    await sleep(2000);
    manom();
  }
  let fs=predS();
  let ss=predS();
  let fw=predW();
  let sw=predW();
  console.log(fs,fw);
  console.log(ss,sw);
  if(ss>fs){
      ss=Math.floor(Math.random() * 6) + 1 + fs;
      if(sw==10){
        sw=Math.floor(Math.random() * (9- 5 + 1)) + 5;
      }
  }
  console.log(fs,fw);
  console.log(ss,sw);

  main(); // Call the main function to start the sequence

  

