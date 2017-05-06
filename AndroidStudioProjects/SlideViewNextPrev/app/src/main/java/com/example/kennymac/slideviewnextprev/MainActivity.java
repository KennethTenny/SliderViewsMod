package com.example.kennymac.slideviewnextprev;


        import android.support.v7.app.AppCompatActivity;
        import android.os.Bundle;
        import android.view.View;
        import android.widget.Button;
        import android.widget.TextView;
        import android.widget.ViewFlipper;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    ViewFlipper viewFlipper;
    Button next;
    Button previous;
    TextView count;
    int number=0;
    int number_of_slides=3;
    int display;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        viewFlipper = (ViewFlipper)findViewById(R.id.viewFlipper);
        next = (Button) findViewById(R.id.next);
        previous = (Button) findViewById(R.id.previous);
        count= (TextView) findViewById(R.id.count);
        next.setOnClickListener(this);
        previous.setOnClickListener(this);
    }
    @Override
    public void onClick(View v) {
        if (v == next) {

            viewFlipper.showNext();
            number++;
            display=(number)%(number_of_slides);

                count.setText("" + (display+1));
        }
        else if (v == previous) {
            viewFlipper.showPrevious();
            number--;
            display=(number)%(number_of_slides);

                count.setText("" + (display+1));
        }
    }
}