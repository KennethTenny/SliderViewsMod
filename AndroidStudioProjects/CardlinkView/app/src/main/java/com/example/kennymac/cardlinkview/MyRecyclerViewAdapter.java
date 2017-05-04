package com.example.kennymac.cardlinkview;

/**
 * Created by kennymac on 02/05/17.
 */

import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.TextView;

import java.util.ArrayList;

public class MyRecyclerViewAdapter extends RecyclerView.Adapter<MyRecyclerViewAdapter.DataObjectHolder>
{
    private static String LOG_TAG = "MyRecyclerViewAdapter";
    private ArrayList<DataObject> mDataset;
    private static MyClickListener myClickListener;


    public static class DataObjectHolder extends RecyclerView.ViewHolder
            implements View
            .OnClickListener
        {

        TextView label;
        TextView dateTime;
        ProgressBar firstBar;
        Button myButton;
        private int i=0;

        public DataObjectHolder(View itemView) {
            super(itemView);
            label = (TextView) itemView.findViewById(R.id.textView);
            dateTime = (TextView) itemView.findViewById(R.id.textView2);
            firstBar = (ProgressBar) itemView.findViewById(R.id.firstBar);
            myButton = (Button)itemView.findViewById(R.id.myButton);
            myButton.setOnClickListener(new ButtonListener());
            Log.i(LOG_TAG, "Adding Listener");
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            myClickListener.onItemClick(getAdapterPosition(), v);
            //myButton.setOnClickListener(new ButtonListener());

        }

        class ButtonListener implements View.OnClickListener {
            @Override
            public void onClick(View v) {
//                if (i == 0 || i == 10) {
                    //make the progress bar visible
                    firstBar.setMax(150);
//                }else
                if ( i< firstBar.getMax() ) {
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

    public void setOnItemClickListener(MyClickListener myClickListener)
    {
        this.myClickListener = myClickListener;
    }

    public MyRecyclerViewAdapter(ArrayList<DataObject> myDataset) {
        mDataset = myDataset;
    }

    @Override
    public DataObjectHolder onCreateViewHolder(ViewGroup parent, int viewType)
    {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.activity_main, parent, false);

        DataObjectHolder dataObjectHolder = new DataObjectHolder(view);
        return dataObjectHolder;
    }

    @Override
    public void onBindViewHolder(DataObjectHolder holder, int position)
    {
        holder.label.setText(mDataset.get(position).getmText1());
        holder.dateTime.setText(mDataset.get(position).getmText2());
    }

//    public void addItem(DataObject dataObj, int index)
//    {
//        mDataset.add(index, dataObj);
//        notifyItemInserted(index);
//    }
//
//    public void deleteItem(int index)
//    {
//        mDataset.remove(index);
//        notifyItemRemoved(index);
//    }

    @Override
    public int getItemCount() {

        return mDataset.size();
    }

    public interface MyClickListener {
        public void onItemClick(int position, View v);
    }
}
