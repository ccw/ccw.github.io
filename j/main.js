/** @jsx React.DOM */

var Blog = React.createClass({
    render: function() {
        var blog = blogs[this.props.blogID];
        return (
            <div id="diary">
                <div id="wrap"><div id="block">
                    <div id="blog" style={blog.style}>
                        <div className="title" style={blog.title.style}>
                            {blog.title.value}
                        </div>
                        <div className="content" style={blog.content.style}>
                            {blog.content.value}
                        </div>
                    </div>
                </div></div>
            </div>
        );
    }
});

var Gist = React.createClass({
    render: function() {
        var gist = gists[this.props.gistID];
        if (!gist.content) {
            gist.content = (function() { return $.ajax({type: "GET",
                                                        url: gist.raw_url,
                                                        async: false }); }()).responseText;
        }
        var language = gist.language ? gist.language.toLowerCase() : 'none';
        return (
            <div id="gist">
                <div id="wrap"><div id="block">
                    <div id="code">
                        <div className="title">
                            <a href={gist.url}>{gist.description}</a>
                        </div>
                        <pre className={'language-' + language}>
                            <code className={'language-' + language}>
                                {gist.content}
                            </code>
                        </pre>
                    </div>
                </div></div>
            </div>
        );
    }
});

var NaviButton = React.createClass({
    render: function() {
        return (
            <div id={this.props.label} className={this.props.align + ' ' + this.props.show + ' button'} onClick={this.props.handler}>
                <div className="arrow">{this.props.icon}</div>
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function() {
        var _this = this;
        $.get('https://api.github.com/users/ccw/gists', function(data) {
            data.forEach(function(gist) {
                indices.gist[indices.gist.length] = gist.id;
                var fileName = Object.keys(gist.files)[0];
                gists[gist.id] = {
                    'description': gist.description,
                    'url': gist.html_url,
                    'file': fileName,
                    'language': gist.files[fileName].language,
                    'raw_url': gist.files[fileName].raw_url
                };
            });
        });
    },
    getInitialState: function() {
        return ({currentCategory: 'blog', currentIndex: 0, currentBlogIndex: 0, currentGistIndex: 0});
    },
    handlePrevious: function() {
        var delta = (this.state.currentIndex == (indices[this.state.currentCategory].length - 1) ? 0 : 1);
        if (delta != 0) this.flipWith(delta);
        // this.setState({currentBlogIndex: this.state.currentBlogIndex + delta});
    },
    handleNext: function() {
        var delta = (this.state.currentIndex == 0 ? 0 : -1);
        if (delta != 0) this.flipWith(delta);
        // this.setState({currentBlogIndex: this.state.currentBlogIndex - delta});
    },
    switchCategory: function() {
        var index, blogIndex, gistIndex, catgory;
        if (this.state.currentCategory === 'blog') {
            blogIndex = this.state.currentIndex;
            gistIndex = this.state.currentGistIndex;
            index     = gistIndex;
            catgory   = 'gist';
        } else {
            gistIndex = this.state.currentIndex;
            blogIndex = this.state.currentBlogIndex;
            index     = blogIndex;
            catgory   = 'blog';
            this.setState({currentCategory: 'gist', currentIndex: blogIndex, currentBlogIndex: blogIndex, currentGistIndex: gistIndex});
        }
        var _this = this;
        $("#block").animate({ opacity: 0.0 }, 500, 'swing', function() {
            _this.setState({currentCategory: catgory, currentIndex: index, currentBlogIndex: blogIndex, currentGistIndex: gistIndex});
        }).animate({ opacity: 1.0 }, 500 );
    },
    flipWith: function(delta) {
        var _this = this;
        $("#block").animate({ opacity: 0.0 }, 500, 'swing', function() {
            _this.setState({currentCategory:  _this.state.currentCategory, 
                            currentIndex:     _this.state.currentIndex + delta,
                            currentBlogIndex: _this.state.currentBlogIndex,
                            currentGistIndex: _this.state.currentGistIndex});
        }).animate({ opacity: 1.0 }, 500 );
    },
    render: function() {
        var contentID = indices[this.state.currentCategory][this.state.currentIndex];
        var content;
        if (this.state.currentCategory == 'blog') {
            content = <Blog blogID={contentID} />;
        } else {
            content = <Gist gistID={contentID} />;
        }
        return (
            <div id="app">
                <div id="controls">
                    <div id="buttons">
                        <NaviButton handler={this.handlePrevious}
                                    show={this.state.currentIndex < indices[this.state.currentCategory].length - 1 ? 'on' : 'off'}
                                    align='left'
                                    label='prev'
                                    icon='&#8617;' />
                        <NaviButton handler={this.handleNext}
                                    show={this.state.currentIndex > 0 ? 'on' : 'off'}
                                    align='right'
                                    label='next'
                                    icon='&#8618;' />
                    </div>
                </div>

                <div id="selections">
                    <div id="categories">
                        <div className="item">
                            <h4><span className="small">&#9654;</span>&nbsp;category</h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked onChange={this.switchCategory} />
                                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>

                {content}

            </div>
        );
    }
});

React.renderComponent(<App />, document.getElementById('body'));