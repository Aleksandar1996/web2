import React from 'react';

var brotvorenih=0;
var prethodni=null;
var prethodni1=null;
export class Polje extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            show: false,
            pronadjen: false,
            postavljeno: false,
            defslika:'https://dtl8aquwvcoqt.cloudfront.net/catalog/product/cache/1/image/a77c1558d860704591e3027d1ebed402/b/h/bhar030054.jpg'
        });
        this.Provera = this.Provera.bind(this);
        this.ImaSliku = this.ImaSliku.bind(this);
        this.PostaviSliku = this.PostaviSliku.bind(this);
        this.VratiSliku = this.VratiSliku.bind(this);
        this.StampajSliku = this.StampajSliku.bind(this);
        this.OsveziStanje=this.OsveziStanje.bind(this);
    }
    VratiSliku() {
        console.log(this.state.slika);
        return this.props.slika;
    }
    ImaSliku() {
        return this.state.postavljeno ? true : false;
    }
    PostaviSliku() {
        this.state.postavljeno = true;
    }
    StampajSliku() {
        if(this.state.show)
        {
        return (
            <img
                onClick={this.Provera}
                alt="greska"
                src={this.props.slika}
                style={{ height: 50, width: 50, margin: 3 }}
            />
        );
    }
    else
    {
        return (
            <img
                onClick={this.Provera}
                alt="greska"
                src={this.state.defslika}
                style={{ height: 50, width: 50, margin: 3 }}
            />
        );
    }
}
    OsveziStanje(vrednost)
    {
        this.state.show=vrednost;
        this.forceUpdate();
    }
    Provera()
    {
        if(!this.state.pronadjen)
        {
        if (this.state.show) {
            this.state.show=false;
            this.forceUpdate();
        }
        else {
            this.state.show=true;
            this.forceUpdate();
        }//ako su oba i kliknes na isti da se obrisu oba
        if((prethodni!=null&&prethodni1!=null)&& (this==prethodni || this==prethodni1))
        {
            if(!prethodni.state.pronadjen&&!prethodni1.state.pronadjen)
            {   prethodni.OsveziStanje(false);
                prethodni1.OsveziStanje(false);
                prethodni=null;
                prethodni1=null;
            }
        }
        if(prethodni!=null && prethodni1!=null && prethodni!=prethodni1 && prethodni.state.show && prethodni1.state.show && prethodni.props.slika!==prethodni1.props.slika)
        {
            if(!prethodni.state.pronadjen&&!prethodni1.state.pronadjen)
            {   prethodni.OsveziStanje(false);
                prethodni1.OsveziStanje(false);
                prethodni=null;
                prethodni1=null;
            }
        }
        if(prethodni!=null && prethodni1.props.slika===prethodni.props.slika && prethodni.state.show && prethodni1.state.show && !prethodni.state.pronadjen && !prethodni1.state.pronadjen)
        {
            prethodni.state.pronadjen=true;
            prethodni1.state.pronadjen=true;
            brotvorenih=brotvorenih+2;
            prethodni=null;
            prethodni1=null;
        }
        prethodni=prethodni1;
        prethodni1=this;
        if(brotvorenih==16)
        {
            alert("Pobedili ste!");
        }
    }
    }
    render()
    {
        return (<div>{this.StampajSliku()}</div>);
    }
}
