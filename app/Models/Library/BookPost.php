<?php

namespace App\Models\Library;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class BookPost extends Model
{
    use LogsActivity;

    protected $fillable = [
                            'book_id',
                            'date_of_addition',
                            'quantity',
                            'remarks',
                            'options'
                        ];
    protected $casts = ['options' => 'array', 'date_of_addition' => 'date'];
    protected $primaryKey = 'id';
    protected $table = 'book_posts';

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->useLogName('book_post')
            ->logAll()
            ->logExcept(['updated_at'])
            ->logOnlyDirty();
    }

    public function book()
    {
        return $this->belongsTo('App\Models\Library\Book');
    }

    public function bookPostDetails()
    {
        return $this->hasMany('App\Models\Library\BookPostDetail');
    }

    public function scopeInfo($q)
    {
        return $q->with('book', 'bookPostDetails');
    }

    public function scopeFilterById($q, $id)
    {
        if (! $id) {
            return $q;
        }

        return $q->where('id', '=', $id);
    }

    public function scopeFilterByBookId($q, $book_id)
    {
        if (! $book_id) {
            return $q;
        }

        return $q->where('book_id', '=', $book_id);
    }
}
