package com.example.kennymac.progressbarfortest;

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private ProgressBar firstBar = null;
    private Button myButton;
    private int i = 0;
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        firstBar = (ProgressBar)findViewById(R.id.firstBar);
        myButton = (Button)findViewById(R.id.myButton);
        myButton.setOnClickListener(new ButtonListener());
    }
    class ButtonListener implements OnClickListener{
        @Override
        public void onClick(View v) {

            if (i == 0 || i == 10) {
                //make the progress bar visible
                firstBar.setMax(150);
            }else if ( i< firstBar.getMax() ) {
                //Set first progress bar value
                firstBar.setProgress(i);
                //Set the second progress bar value
                firstBar.setSecondaryProgress(i + 10);
            }else {
                firstBar.setProgress(0);
                firstBar.setSecondaryProgress(0);
                i = 0;

            }
            i = i + 10;
        }
    }
}