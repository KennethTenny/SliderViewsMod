package com.example.kennymac.swipeimplementation;

import android.content.Context;
import android.media.MediaPlayer;
import android.net.Uri;
import android.support.v4.view.PagerAdapter;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.VideoView;

/**
 * Created by kennymac on 14/04/17.
 */

public class CustomSwipeAdapter extends PagerAdapter {

    private int[] image_resources= {R.drawable.i1, R.drawable.i2};
    private Context ctx;
    private LayoutInflater layoutInflater;

    public CustomSwipeAdapter(Context ctx)
    {
        this.ctx=ctx;
    }

    @Override
    public int getCount() {
        return image_resources.length ;
    }

    @Override
    public boolean isViewFromObject(View view, Object object) {
        return (view==(LinearLayout)object);
    }

    @Override
    public Object instantiateItem(ViewGroup container, int position) {
        layoutInflater= (LayoutInflater) ctx.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View item_view=layoutInflater.inflate(R.layout.swipe_layout,container,false);

//        //Video
//        String str="https://firebasestorage.googleapis.com/v0/b/swipeimplementation.appspot.com/o/Nikon%20D7500-%20Time-lapse%20sample%20video.mp4?alt=media&token=3ae5b5b0-c72e-4ea1-9b87-e4442870b1ed";
//        Uri uri = Uri.parse(str);
//        VideoView mVideoView= (VideoView)findViewById(R.id.VideoView);
//        final ProgressBar progressBarLandScape=(ProgressBar)findViewById(R.id.progressbar);
//
//        mVideoView.setVideoURI(uri);
//        progressBarLandScape.setVisibility(View.VISIBLE);
//        mVideoView.requestFocus();
//        mVideoView.start();
//
//        mVideoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
//            @Override
//            public void onPrepared(MediaPlayer mp) {
//                mp.setLooping(true);
//            }
//        });
//
//        mVideoView.setOnInfoListener(new MediaPlayer.OnInfoListener() {
//            @Override
//            public boolean onInfo(MediaPlayer mp, int what, int extra) {
//                if (what == MediaPlayer.MEDIA_INFO_BUFFERING_END) {
//                    return true;
//                }
//                else if(what == MediaPlayer.MEDIA_INFO_BUFFERING_START){
//                    return true;
//                }
//                return false;
//            }
//        });


        ImageView imageView= (ImageView) item_view.findViewById(R.id.image_view);
        TextView textView= (TextView) item_view.findViewById(R.id.image_count);

        imageView.setImageResource(image_resources[position]);
        textView.setText("Image:"+ position);
        container.addView(item_view);
        return item_view;
    }

    @Override
    public void destroyItem(ViewGroup container, int position, Object object) {
        container.removeView((LinearLayout)object);
    }
}
