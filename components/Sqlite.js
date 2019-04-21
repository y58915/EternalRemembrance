import React,{Component} from 'react';
import{
  ToastAndroid,
} from 'react-native';
import SQLiteStorage from 'react-native-sqlite-storage';
SQLiteStorage.DEBUG(true);
var database_name = "test.db";//dbfile
var database_version = "1.0";//version
var database_displayname = "MySQLite";
var database_size = -1;//unlimited
var db;
export default class  SQLite extends Component{
	componentWillUnmount(){
    if(db){
        this._successCB('close');
        db.close();
    }else {
        console.log("SQLiteStorage not open");
    }
  }
  open(){
    db = SQLiteStorage.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
      ()=>{
          this._successCB('open');
      },
      (err)=>{
          this._errorCB('open',err);
      });
    return db;
  }
  createTable(){
    if (!db) {
        this.open();
    }
    //Create user table
    db.transaction((tx)=> {
      tx.executeSql('CREATE TABLE IF NOT EXISTS USER(' +
          'id INTEGER PRIMARY KEY  AUTOINCREMENT,' +
          'name varchar,'+
          'age VARCHAR,' +
          'sex VARCHAR,' +
          'phone VARCHAR,' +
          'email VARCHAR,' +
          'SSN VARCHAR)'
          , [], ()=> {
              this._successCB('executeSql');
          }, (err)=> {
              this._errorCB('executeSql', err);
        });
    }, (err)=> {//transaction error print out
        this._errorCB('transaction', err);
    }, ()=> {
        this._successCB('transaction');
    })
	}
  deleteData(){
    if (!db) {
        this.open();
    }
    db.transaction((tx)=>{
      tx.executeSql('delete from user',[],()=>{

      });
    });
  }
  dropTable(){
    db.transaction((tx)=>{
      tx.executeSql('drop table user',[],()=>{

      });
    },(err)=>{
      this._errorCB('transaction', err);
    },()=>{
      this._successCB('transaction');
    });
  }
	insertUserData(userData){
    let len = userData.length;
    if (!db) {
        this.open();
    }
    this.createTable();
    this.deleteData();
    db.transaction((tx)=>{
       for(let i=0; i<len; i++){
        var user = userData[i];
        let name= user.name;
        let age = user.age;
        let sex = user.sex;
        let phone = user.phone;
        let email = user.email;
        let SSN = user.SSN;
        let sql = "INSERT INTO user(name,age,sex,phone,email,SSN)"+
        "values(?,?,?,?,?,?)";
        tx.executeSql(sql,[name,age,sex,phone,email,SSN],()=>{

          },(err)=>{
            console.log(err);
          }
        );
      }
    },(error)=>{
      this._errorCB('transaction', error);
      ToastAndroid.show("data insertion failed",ToastAndroid.SHORT);
    },()=>{
      this._successCB('transaction insert data');
      ToastAndroid.show("data insertion succeed "+len+" lines User Data",ToastAndroid.SHORT);
    });
  }
  close(){
      if(db){
          this._successCB('close');
          db.close();
      }else {
          console.log("SQLiteStorage not open");
      }
      db = null;
  }
  _successCB(name){
    console.log("SQLiteStorage "+name+" success");
  }
  _errorCB(name, err){
    console.log("SQLiteStorage "+name);
    console.log(err);
  }
	render(){
		return null;
	}
};
