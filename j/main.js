/** @jsx React.DOM */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Blog = React.createClass({
    render: function() {
        var blog = blogs[this.props.blogID];
        return (
            <div id="diary">
                <div id="wrap"><div id="block">
                    <ReactCSSTransitionGroup transitionName="blog">
                        <div id="blog" style={blog.style}>
                            <div className="title" style={blog.title.style}>
                                {blog.title.value}
                            </div>
                            <div className="content" style={blog.content.style}>
                                {blog.content.value}
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
                </div></div>
            </div>
        );
    }
});

var NaviButton = React.createClass({
    render: function() {
        return (
            <div id="prev" className={this.props.align + ' ' + this.props.show + ' button'} onClick={this.props.handler}>
                <div className="label">{this.props.label}</div>
                <div className="arrow">{this.props.icon}</div>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return ({currentIndex: 0});
    },
    handlePrevious: function() {
        var delta = (this.state.currentIndex == (indices.length - 1) ? 0 : 1);
        if (delta != 0) this.flipWith(delta);
        // this.setState({currentIndex: this.state.currentIndex + delta});
    },
    handleNext: function() {
        var delta = (this.state.currentIndex == 0 ? 0 : -1);
        if (delta != 0) this.flipWith(delta);
        // this.setState({currentIndex: this.state.currentIndex - delta});
    },
    flipWith: function(delta) {
        var _this = this;
        $("#block").animate({ opacity: 0.0 }, 500, 'swing', function() {
            _this.setState({currentIndex: _this.state.currentIndex + delta});
        }).animate({ opacity: 1.0 }, 500 );
    },
    render: function() {
        var blogID = indices[this.state.currentIndex];
        // console.log([this.state.currentIndex, blogID]);
        return (
            <div id="app">
                <div id="controls">
                    <div id="buttons">
                        <NaviButton handler={this.handlePrevious}
                                    show={this.state.currentIndex < indices.length - 1 ? 'on' : 'off'}
                                    align='left'
                                    label='prev'
                                    icon='&#8636;' />
                        <NaviButton handler={this.handleNext}
                                    show={this.state.currentIndex > 0 ? 'on' : 'off'}
                                    align='right'
                                    label='next'
                                    icon='&#8640;' />
                    </div>
                </div>

                <Blog blogID={blogID} />
            </div>
        );
    }
});

React.renderComponent(<App />, document.getElementById('body'));