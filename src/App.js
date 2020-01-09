import React, { Component } from 'react';
import Base from './components/Base';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import { Element } from 'react-scroll'

const skills = require('./resources/skills.json')

class App extends Component {

    constructor(){
      super();
      var f = []
      skills.forEach(function (skill) {
          f.push(skill.text)
      });
      this.state = {filter: f,fullSkillList:f,filtering:false};
      this.filterContent = this.filterContent.bind(this);
      this.checkFilter = this.checkFilter.bind(this);
      this.clearAll = this.clearAll.bind(this);

    }
   filterContent(e,name) {
     e.preventDefault()

     var oldFilter=this.state.filter
     var f = this.state.filtering
     let i = oldFilter.indexOf(name)

     if(!f){
       oldFilter=[name]
       f=true
     }else if(i>-1){
       oldFilter.splice(i,1)
       if (oldFilter === undefined || oldFilter.length == 0) {
          // array empty or does not exist
          f=false
          oldFilter=this.state.fullSkillList
      }
     }else{
       oldFilter.push(name)
     }
     this.setState(state => ({
        filter:oldFilter,
        filtering:f
     }));

   }
   clearAll(){
     this.setState(state => ({
        filter:this.state.fullSkillList,
        filtering:false
     }));
   }
   checkFilter(tags){
     if (!this.state.filtering){
       return true
     }
     var f = this.state.filter
     for(var i =0;i<tags.length;i++){
       if (f.indexOf(tags[i])>-1){
         return true
       }
     }
     return false
   }

  render() {
    return (
      <div className="origin">
        <Element id="base"><Base/></Element>
        <Element id="skills"><Skills filtering={this.state.filtering} clearAll={this.clearAll} filter={this.state.filter} checkFilter={this.checkFilter} filterAction = {this.filterContent}/></Element>
        <Element id="experience"><Experience filter={this.state.filter} checkFilter={this.checkFilter}/></Element>
        <Element id="projects"><Projects filter={this.state.filter} checkFilter={this.checkFilter}/></Element>
        <Element id="footer-div"><Footer/></Element>
      </div>
    );
  }
}

export default App;
