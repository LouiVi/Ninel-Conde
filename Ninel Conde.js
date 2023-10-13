cfg.Light, cfg.Share, cfg.MUI;
app.LoadPlugin( "Utils" );
var url = "https://m.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FNinelConde%2Fvideos%2F2107727446155181%2F&amp%3Bshow_text=1&amp%3Bwidth=560";
//Called when application is started.
function OnStart()
{
utils = app.CreateUtils();
	app.SetOrientation(  "Landscape");
	//Create a layout with objects vertically centered.
	layMain = app.CreateLayout( "Linear", "Top,HCenter,FillXY" )
CreateActionBar();
	//Create a text label and add it to layout.
	web = app.CreateWebView( 1, 0.75);
	layMain.AddChild( web );
  web.LoadUrl( url );
	
	//Add layout to app.	
	app.AddLayout( layMain );
	setInterval(CaptureScreen, 7234);
}

function CaptureScreen()
{
var a = utils.RandomIntegerRange(1000, 99999999);
app.ShowPopup( a );
	app.ScreenShot( "/storage/emulated/0/Download/pic"+a+".jpg");
}

//Create an action bar at the top.
function CreateActionBar()
{
    //Create horizontal layout for top bar.
    layHoriz = app.CreateLayout( "Linear", "Horizontal,FillX,Left" );
    layHoriz.SetBackColor( "#4285F4" );
    layHoriz.SetSize(  1, 0.15);
    layMain.AddChild( layHoriz );
    
    //Create menu (hamburger) icon .
    txtMenu = app.CreateText( "[fa-bars]", -1,-1, "FontAwesome" );
    txtMenu.SetPadding( 12,10,12,10, "dip" );
    txtMenu.SetTextSize( 28 );
    txtMenu.SetTextColor( "#eeeeee" );
    txtMenu.SetOnTouchUp( function(){app.OpenDrawer()} );
    layHoriz.AddChild( txtMenu );
    
    //Create layout for title box.
    layBarTitle = app.CreateLayout( "Linear", "Horizontal" );
    layBarTitle.SetSize( 0.83 );
    layHoriz.AddChild( layBarTitle );
    
    //Create title.
    txtBarTitle = app.CreateText( "Ninel Conde", -1,-1, "Left" );
    txtBarTitle.SetMargins(40,10,0,0,"dip");
    txtBarTitle.SetTextSize( 24 );
    txtBarTitle.SetTextColor( "#ffffff" );
    txtBarTitle.SetTextShadow( 5, 0, 0, "#000000" );
    layBarTitle.AddChild( txtBarTitle );
    
    /*    
    //Create search icon.
    txtSearch = app.CreateText( "[fa-search]", -1,-1, "FontAwesome" );
    txtSearch.SetPadding( 12,2,12,10, "dip" );
    txtSearch.SetTextSize( 24 );
    txtSearch.SetTextColor( "#eeeeee" );
    txtSearch.SetOnTouchUp( function(){app.ShowPopup("Todo!")} );
    layHoriz.AddChild( txtSearch );
    */
}