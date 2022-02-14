module DateUtils
  private
  
  def simple_date(date)
    date.strftime('%a, %d %b %Y')
  end

  def full_date(date)
    date.strftime('%a, %d %b %Y %H:%M:%S')
  end
end