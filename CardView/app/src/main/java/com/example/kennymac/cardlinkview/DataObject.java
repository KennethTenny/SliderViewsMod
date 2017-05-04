package com.example.kennymac.cardlinkview;

import android.widget.Button;
import android.widget.ProgressBar;

/**
 * Created by kennymac on 02/05/17.
 */

public class DataObject {
    private String mText1;
    private String mText2;



    DataObject (String text1, String text2){
        mText1 = text1;
        mText2 = text2;
//        firstBar = (ProgressBar)findViewById(R.id.firstBar);
//        secondBar = (ProgressBar)findViewById(R.id.secondBar);
//        myButton = (Button)findViewById(R.id.myButton);
//        myButton.setOnClickListener(new ButtonListener());
    }

    public String getmText1() {
        return mText1;
    }

    public void setmText1(String mText1) {
        this.mText1 = mText1;
    }

    public String getmText2() {
        return mText2;
    }

    public void setmText2(String mText2) {
        this.mText2 = mText2;
    }
}
