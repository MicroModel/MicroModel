class MicroModel{
  constructor(props){
    this.props = props;
    this.node = document.getElementById(this.props.id);
    if(this.render){
      this.render = this.render.bind(this);
      window.requestAnimationFrame(this.render);
    }
  }

  setState(state){
    if( this.state != state && Object.values(state).length ){
      this.state = Object.assign({}, this.state, state);
      if(this.render){
        window.requestAnimationFrame(this.render);
      }
    }
  }
}

// export default MicroModel;
