
    	$( document ).ready( function() {

            var entries = [ 
                
                { label: 'Javascript', url:'https://www.javascript.com/'  , target: '_top' },
                { label: 'Php', url:' https://www.php.net/', target: '_top' },
                { label: 'React', url: 'https://tr.reactjs.org/', target: '_top' },
                { label: 'Vue', url: 'https://vuejs.org/', target: '_top' },
                { label: 'Django', url: 'https://www.djangoproject.com/', target: '_top' },
                { label: 'Html', url: 'https://html.com/', target: '_top' },
                { label: 'Css', url: 'https://www.w3.org/Style/CSS/Overview.en.html', target: '_top' },
                { label: 'Phyton', url: 'https://www.python.org/', target: '_top' },
                { label: 'Node.js', url: 'https://nodejs.org/en/', target: '_top' },
                { label: 'C', url: 'https://www.learn-c.org/', target: '_top' },
                { label: 'C++', url: 'https://isocpp.org/', target: '_top' },
                { label: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/', target: '_top' },
                { label: 'Java', url: 'https://www.java.com/en/', target: '_top' },
                { label: 'Ruby', url: 'https://www.ruby-lang.org/en/', target: '_top' },
                { label: 'Cobol', url: 'https://developer.ibm.com/languages/cobol/', target: '_top' },
                { label: 'Pascal', url: 'https://www.freepascal.org/', target: '_top' },
                { label: 'Perl', url: 'https://www.perl.org/', target: '_top' },
                { label: 'Rebol', url: 'http://www.rebol.com/', target: '_top' },
                { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
                { label: 'Shell', url: 'https://www.shellscript.sh/', target: '_top' },
            ];
            
            var settings = {

                entries: entries,
                width: 700,
                height: 600,
                radius: '50%',
                radiusMin: 60,
                bgDraw: true,
                bgColor: 'black',
                opacityOver: 1.00,
                opacityOut: 0.05,
                opacitySpeed: 4,
                fov: 800,
                speed: 1,
                fontFamily: 'Oswald, Arial, sans-serif',
                fontSize: '15',
                fontColor: '#fff',
                fontWeight: 'normal',//bold
                fontStyle: 'normal',//italic 
                fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                fontToUpperCase: true,
                tooltipFontFamily: 'Oswald, Arial, sans-serif',
                tooltipFontSize: '11',
                tooltipFontColor: '#fff',
                tooltipFontWeight: 'normal',//bold
                tooltipFontStyle: 'normal',//italic 
                tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
                tooltipFontToUpperCase: false,
                tooltipTextAnchor: 'left',
                tooltipDiffX: 0,
                tooltipDiffY: 10

            };

            //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
            $( '#holder' ).svg3DTagCloud( settings );

		});
        